from django import forms
from .models import Description, Comision, Citas, Extras


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


class ComisionForm(forms.ModelForm):
    class Meta:
        model = Comision
        fields = ['sell', 'buy']
        widgets = {
            'sell': forms.TextInput(attrs={'class': 'form-control', }),
            'buy': forms.TextInput(attrs={'class': 'form-control', }),
        }
        labels = {
            'sell': 'Venta (Porcentaje)', 'buy': 'Compra (Porcentaje)',
        }


class CitasForm(forms.ModelForm):
    class Meta:
        model = Citas
        fields = ['name', 'text', 'color']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', }),
            'text': forms.Textarea(attrs={'class': 'form-control', }),
        }
        labels = {
            'name': 'Título de la nota', 'text': 'Texto de la nota', 'color': ''
        }


class ExtrasForm(forms.ModelForm):
    class Meta:
        model = Extras
        fields = ['dolar', 'euro']
        widgets = {
            'dolar': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Dólar'}),
            'euro': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Euro'}),
        }
        labels = {
            'dolar': 'Dólar', 'euro': 'Euro',
        }
