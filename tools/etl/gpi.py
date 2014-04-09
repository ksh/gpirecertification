import sys
sys.path.insert(0,'C:\Users\Carlos\Documents\GitHub\gpirecertification')
sys.path.insert(0,'C:\program files\google')
sys.path.insert(0,'C:\program files\google\google_appengine')
sys.path.insert(0,'C:\program files\google\google_appengine\lib')
sys.path.insert(0,'C:\program files\google\google_appengine\lib\jinja2-2.6')
sys.path.insert(0,'C:\program files\google\google_appengine\lib\webapp2-2.5.2')
sys.path.insert(0,'C:\program files\google\google_appengine\lib\webob-1.2.3')
sys.path.insert(0,'C:\program files\google\google_appengine\lib\yaml\lib')
#sys.path.insert(0,'C:\programas\google\google_appengine\lib\yaml\lib\yaml')

import argparse
import etl
if __name__ =='__main__':
    PARSER = argparse.ArgumentParser(add_help=False, parents=[etl.PARSER])
    etl.main(PARSER.parse_args())

