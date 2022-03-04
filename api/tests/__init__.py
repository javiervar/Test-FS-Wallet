import unittest
from .test_utils import TestSetup,  TestClientUtils


def suite():
    suite = unittest.TestSuite()
    suite.addTest(unittest.makeSuite(TestSetup))
    suite.addTest(unittest.makeSuite(TestClientUtils))
 
    return suite
