from django.contrib import admin
from main.models import *

# Register your models here.
class AdminModelSingle(admin.ModelAdmin):
    pass


admin.site.register(Doctor, AdminModelSingle)
admin.site.register(Otziv, AdminModelSingle)
admin.site.register(Service, AdminModelSingle)
admin.site.register(Feedback, AdminModelSingle)
admin.site.register(Gallery, AdminModelSingle)