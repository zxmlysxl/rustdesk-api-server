# Generated by Django 3.2 on 2024-09-09 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_rustdesdevice_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='rustdesdevice',
            name='ip_address',
            field=models.CharField(blank=True, max_length=60, verbose_name='IP'),
        ),
    ]
