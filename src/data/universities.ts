export interface University {
  name: string;
  state: string;
  city: string;
}

export const universities: University[] = [
  { name: "University of Lagos", state: "Lagos", city: "Akoka" },
  { name: "Lagos State University", state: "Lagos", city: "Ojo" },
  { name: "University of Ibadan", state: "Oyo", city: "Ibadan" },
  { name: "Obafemi Awolowo University", state: "Osun", city: "Ile-Ife" },
  { name: "University of Nigeria, Nsukka", state: "Enugu", city: "Nsukka" },
  { name: "Ahmadu Bello University", state: "Kaduna", city: "Zaria" },
  { name: "University of Ilorin", state: "Kwara", city: "Ilorin" },
  { name: "University of Benin", state: "Edo", city: "Benin City" },
  { name: "University of Port Harcourt", state: "Rivers", city: "Port Harcourt" },
  { name: "Bayero University Kano", state: "Kano", city: "Kano" },
  { name: "Covenant University", state: "Ogun", city: "Ota" },
  { name: "Babcock University", state: "Ogun", city: "Ilishan-Remo" },
  { name: "Federal University of Technology, Akure", state: "Ondo", city: "Akure" },
  { name: "University of Jos", state: "Plateau", city: "Jos" },
  { name: "University of Calabar", state: "Cross River", city: "Calabar" },
  { name: "University of Abuja", state: "FCT", city: "Abuja" },
];

export const states = Array.from(new Set(universities.map((u) => u.state))).sort();
