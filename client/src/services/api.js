const API_BASE_URL = 'http://localhost:8000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const submitApplication = async (formData) => {
  try {
    // 1. First, create the intern record
    const internData = new FormData();
    const { personalInfo, education, workExperience, uploads } = formData;

    // Combine first and last name
    const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

    // Prepare intern data
    internData.append('full_name', fullName);
    internData.append('id_number', personalInfo.idNo);
    internData.append('email', personalInfo.email);
    internData.append('phone_number', personalInfo.phone);
    internData.append('gender', personalInfo.gender);
    internData.append('physical_address', personalInfo.address);
    internData.append('county', personalInfo.county);
    internData.append('sub_county', personalInfo.subCounty);
    internData.append('ward', personalInfo.ward);
    internData.append('location', personalInfo.location);

    // Create intern
    const internResponse = await fetch(`${API_BASE_URL}/interns/`, {
      method: 'POST',
      body: internData
    });
    const internResult = await handleResponse(internResponse);
    const internId = internResult.id;

    // 2. Create education background
    const educationData = new FormData();
    educationData.append('intern', internId);
    educationData.append('EducationBackground', education.educationLevel);
    educationData.append('grade', education.grade);
    educationData.append('course', education.course);
    educationData.append('expected_graduation', education.graduationDate);
    educationData.append('institution', education.institution);

    await fetch(`${API_BASE_URL}/education/`, {
      method: 'POST',
      body: educationData
    }).then(handleResponse);

    // 3. Create work experience if exists
    if (workExperience.hasExperience === 'yes') {
      const workData = new FormData();
      workData.append('Intern', internId);
      workData.append('company_name', workExperience.companyName);
      workData.append('job_title', workExperience.position);
      workData.append('start_date', workExperience.startDate);
      workData.append('end_date', workExperience.endDate);
      workData.append('job_description', workExperience.responsibilities);

      await fetch(`${API_BASE_URL}/work-experience/`, {
        method: 'POST',
        body: workData
      }).then(handleResponse);
    }

    // 4. Create department preference
    const deptData = new FormData();
    deptData.append('intern', internId);
    deptData.append('department', uploads.department);
    deptData.append('sub_department', uploads.subDepartment);
    deptData.append('preference', uploads.applicationReason);

    await fetch(`${API_BASE_URL}/department-preference/`, {
      method: 'POST',
      body: deptData
    }).then(handleResponse);

    // 5. Upload files
    const filesData = new FormData();
    filesData.append('intern', internId);
    filesData.append('passport', uploads.passportPhoto);
    filesData.append('transcript', uploads.transcripts);
    filesData.append('CV', uploads.cv);
    filesData.append('recommendation', uploads.recommendationLetter);

    await fetch(`${API_BASE_URL}/uploads/`, {
      method: 'POST',
      body: filesData
    }).then(handleResponse);

    return internResult;
  } catch (error) {
    console.error('Application submission error:', error);
    throw error;
  }
};

// Get departments list
export const getDepartments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/departments/`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

// Check application status
export const checkApplicationStatus = async (applicationId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/interns/${applicationId}/`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error checking application status:', error);
    throw error;
  }
}; 