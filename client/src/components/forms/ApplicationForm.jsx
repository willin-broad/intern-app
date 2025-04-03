import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EduBackground from './EduBackground';
import WorkExperience from './WorkExperience';
import Uploads from './Uploads';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    workExperience: {},
    uploads: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (key, data) => {
    setFormData(prev => ({ ...prev, [key]: data }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Prepare FormData for file uploads
      const finalData = new FormData();
      
      // Append all form data
      Object.entries(formData).forEach(([section, data]) => {
        Object.entries(data).forEach(([key, value]) => {
          if (value instanceof File) {
            finalData.append(key, value);
          } else {
            finalData.append(`${section}.${key}`, value);
          }
        });
      });

      // API call to your backend
      const response = await fetch('http://localhost:8000/api/interns/', {
        method: 'POST',
        body: finalData,
      });

      if (!response.ok) throw new Error('Submission failed');
      
      // Handle success (redirect, show success message, etc.)
      alert('Application submitted successfully!');
      // Reset form or redirect
      setStep(1);
      setFormData({
        personalInfo: {},
        education: {},
        workExperience: {},
        uploads: {},
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-evenly">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                {stepNumber}
              </div>
              <div className="text-xs mt-1">
                {['Personal', 'Education', 'Experience', 'Uploads'][stepNumber - 1]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      {step === 1 && (
        <PersonalInfo
          initialData={formData.personalInfo}
          onNext={(data) => {
            updateFormData('personalInfo', data);
            nextStep();
          }}
        />
      )}
      {step === 2 && (
        <EduBackground
          initialData={formData.education}
          onNext={(data) => {
            updateFormData('education', data);
            nextStep();
          }}
          onBack={prevStep}
        />
      )}
      {step === 3 && (
        <WorkExperience
          initialData={formData.workExperience}
          onNext={(data) => {
            updateFormData('workExperience', data);
            nextStep();
          }}
          onBack={prevStep}
        />
      )}
      {step === 4 && (
        <Uploads
          initialData={formData.uploads}
          onSubmit={(data) => {
            updateFormData('uploads', data);
            handleFinalSubmit();
          }}
          onBack={prevStep}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}