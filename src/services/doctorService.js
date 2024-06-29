export const getDoctorsBySpecialization = async (specialization) => {
  const response = await fetch(
    `http://127.0.0.1:8000/api/doctors/by-specialization?specialization=${specialization}`
  );
  return response.json();
};

export const getAllDoctors = async () => {
  const response = await fetch(`http://127.0.0.1:8000/api/doctors`);
  return response.json();
};
