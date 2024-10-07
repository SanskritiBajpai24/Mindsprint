from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Activity(models.Model):
    name = models.CharField(max_length=100)
    duration = models.PositiveBigIntegerField()
    type = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    preferences = models.JSONField()


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    descriptions = models.TextField(blank=True)
    priority = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()


    def __str__(self):
        return self.name

class BreakSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.Model('Activity', on_delete = models.SET_NULL, null = True)
    scheduled_time = models.DateTimeField()
    def __str__(self):
        return f"BreakSession by {self.user} for {self.activity} at {self.scheduled_time}"
    