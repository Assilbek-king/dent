from django.db import models

# Create your models here.



class Doctor(models.Model):
    name = models.CharField(max_length=300, blank=True)
    last_name = models.CharField(max_length=300, blank=True)
    job = models.CharField(max_length=300, blank=True)
    logo = models.ImageField(upload_to='upload', blank=True)
    description = models.TextField(max_length=500, blank=True)
    status = models.BooleanField(default=True, blank=True)


    def __str__(self):
        return f'{self.name} {self.last_name}'


class Otziv(models.Model):
    name = models.CharField(max_length=300, blank=True)
    comment = models.TextField(blank=True,null=True)

    def __str__(self):
        return f'{self.name}'


class Service(models.Model):
    name = models.CharField(max_length=300, blank=True)
    description = models.TextField(max_length=500, blank=True)
    logo = models.ImageField(upload_to='upload', blank=True)
    status = models.BooleanField(default=True, blank=True)


    def __str__(self):
        return f'{self.name}'



class Feedback(models.Model):
    name = models.CharField(max_length=300, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    comment = models.TextField(blank=True,null=True)

    def __str__(self):
        return f'{self.name} {self.phone}'


class Gallery(models.Model):
    logo = models.ImageField(upload_to='upload', blank=True)


    def __str__(self):
        return f'{self.logo}'