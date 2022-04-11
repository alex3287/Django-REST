from django.db import models


class MyUser(models.Model):
    username = models.CharField(max_length=35)
    firstname = models.CharField(max_length=65)
    lastname = models.CharField(max_length=65)
    email = models.EmailField(verbose_name='e-mail', unique=True)
