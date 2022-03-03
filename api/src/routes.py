from flask import Blueprint, request
import urllib.request as urlrq
import certifi
from datetime import datetime
import json
from .extensions import mongodb_client
from .response_handler import handle_error, handle_success
from bson import json_util


api = Blueprint('v1', __name__)


@api.route('/')
def home():
    return ("Welcome")

@api.route('/crypto', methods=["GET"])
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
