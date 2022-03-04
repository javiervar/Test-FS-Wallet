from flask import Blueprint, request
import urllib.request as urlrq
import certifi
from datetime import datetime
import json
from .extensions import mongodb_client
from .response_handler import handle_error, handle_success
from bson import json_util
from flask_cors import  cross_origin


api = Blueprint('v1', __name__)


@api.route('/')
def home():
    return ("Welcome")

@api.route('/crypto', methods=["GET"])
@cross_origin()
def crypto():
    try:
        coins = request.args.get('coins')
        currencies = request.args.get('currencies')
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={coins}&vs_currencies={currencies}"
        resp = urlrq.urlopen(url, cafile=certifi.where())
        
        data = resp.read()
        data=json.loads(data.decode('utf-8'))
        print(data)
        return handle_success(data,"Coins list has been obtained successfully",200)
    except Exception as e:
        return handle_error(str(e),"A problem has ocurred try again",500)


@api.route('/buy', methods=["POST"])
@cross_origin()
def buyCrypto():
    try:
        address = request.form.get('address')
        coin = request.form.get('coin')
        mxn_amount = float(request.form.get('mxn_amount'))
        url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin}&vs_currencies=mxn"
        resp = urlrq.urlopen(url, cafile=certifi.where())
        data = resp.read()
        price_obj = json.loads(data)
        current_price = float(price_obj[coin]["mxn"])
        purchased_amount = mxn_amount/current_price
        date = datetime.now()
        dict = {'address': address, 'coin': coin, 'mxn_amount': mxn_amount,
                'purchased_amount': purchased_amount, 'price': current_price, 'date': str(date)}
        save = mongodb_client.db.transactions.insert_one(dict)
        
        inserted_id=str(save.inserted_id)
        data ={"id": inserted_id,"purchased_amount":purchased_amount}
        return  handle_success(data,"successful purchase",200)
    except Exception as e:
        print(str(e))
        return handle_error(str(e),"A problem has ocurred try again",500)



@api.route('/history', methods=["GET"])
@cross_origin()
def history():
    try:
        res = mongodb_client.db.transactions.find().sort("date", -1)
        data = json.loads(json_util.dumps(res))

        # return Response(res, mimetype="application/json")
        return  handle_success(data,"Transactions history has been obtained successfully",200)
    except Exception as e:
        return handle_error(str(e),"A problem has ocurred try again",500)
