export interface Pet {
  name: string;
  age: string;
  breed: string;
  type: string;
  city: string;
  description: string;
  imageUrl: string;
}

export interface CardsPetProps {
  pet: Pet;
}
