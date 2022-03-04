from flask_testing import TestCase
import os
import sys
sys.path.append(os.path.abspath('..'))
from app import create_app



class TestSetup(TestCase):

    def create_app(self):
        return create_app('src/settings.py')

    def test_setup(self):
        self.assertTrue(self.app is not None)
        self.assertTrue(self.client is not None)
        self.assertTrue(self._ctx is not None)


class TestClientUtils(TestCase):

    def create_app(self):
        return create_app('src/settings.py')

    def test_get_coins(self):
        response = self.client.get("/v1/crypto?coins=etherum")
        self.assertEqual(200, response.status_code)
    
    def test_get_history(self):
        response = self.client.get("/v1/history")
        self.assertEqual(200, response.status_code)
    
    def test_buy_crypto(self):
        response = self.client.post("/v1/buy",data=dict(address='123qwe', coin='bitcoin', mxn_amount='1000'))
        self.assertEqual(200, response.status_code)
