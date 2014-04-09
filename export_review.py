from google.appengine.ext import db
from google.appengine.tools import bulkloader
from models import entities
from models import models
# parece que ha um 'modules' duplicado e por isso nao ha acesso a 'modules.review'  
#from models import domainx

#class Student(db.Model):
#    """Student profile."""
#    enrolled_on = db.DateTimeProperty(auto_now_add=True, indexed=True)
#   user_id = db.StringProperty(indexed=False)
#    name = db.StringProperty(indexed=False)
#    is_enrolled = db.BooleanProperty(indexed=False)

    # Each of the following is a string representation of a JSON dict.
#    scores = db.TextProperty(indexed=False)

class ReviewExporter(bulkloader.Exporter):
    def __init__(self):
        bulkloader.Exporter.__init__(self, 'Review',
                                      [('contents',str, None),
				       ('reviewee_key',lambda reviewee_key:key.name(), None),
				       ('reviewer_key',lambda reviewer_key:key.name(), None),
#                                       ('state', str, None),
                                      ])

exporters = [ReviewExporter]

#class StudentAnswersEntityExporter(bulkloader.Exporter):
#    def __init__(self):
#        bulkloader.Exporter.__init__(self, 'StudentAnswersEntity',
#				[('__key__',str, None),
#         			 ('data', str,None),
#				 ])
#
#exporters = [StudentAnswersEntityExporter]



