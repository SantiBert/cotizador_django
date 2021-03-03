from django import forms
from .models import Contac


class ContacForm(forms.ModelForm):
    class Meta:
        model = Contac
        fields = ['name', 'whasapp', 'telegram']
        widgets = {
            'whasapp': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Número de WhatsApp'}),
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Nombre'}),
            'telegram': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Telegram'}),
        }
        labels = {
            'name': 'Nombre', 'whasapp ': 'WhatsApp', 'telegram': 'Telegram',
        }
