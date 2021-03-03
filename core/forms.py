from django import forms
from .models import Description


class DescriptionForm(forms.ModelForm):
    class Meta:
        model = Description
        fields = ['descrip', ]
        widgets = {
            'descrip': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Parrafo'}),
        }
        labels = {
            'descrip': '',
        }
