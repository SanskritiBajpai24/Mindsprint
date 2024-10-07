from django.shortcuts import render
from rest_framework import viewsets
from.models import Activity, Task, UserProfile
from.serializers import ActivitySerializer,TaskSerializer,UserProfileSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

   
def home(request):
    return render('index.html')


