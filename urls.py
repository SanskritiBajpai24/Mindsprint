from django.urls import path, include
from rest_framework import DefaultRouter
from .views import ActivityViewSet,TaskViewSet,UserProfileViewSet,home

router = DefaultRouter()
router.register(r'activities', ActivityViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'profiles',UserProfileViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('',home,name='home'),
   path('api/', include(router.urls))
]