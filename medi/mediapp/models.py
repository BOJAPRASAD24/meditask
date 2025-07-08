from django.db import models

class User(models.Model):
    ROLE_CHOICES = (
        ('patient', 'Patient'),
        ('admin', 'Admin'),
        ('staff', 'Staff'),
    )

    name = models.CharField(max_length=100)
    role = models.CharField(max_length=20)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.name} ({self.role})"

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    speciality = models.CharField(max_length=100)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='appointments')
    datetime = models.DateTimeField()

    def __str__(self):
        return f"{self.patient.name} with {self.doctor.name} on {self.datetime}"

class Review(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='reviews')
    feedback = models.TextField()

    def __str__(self):
        return f"Review for {self.doctor.name}"

