from rest_framework import routers
from .views import ContactsViewSet

router = routers.DefaultRouter()
router.register('contacts', ContactsViewSet)
