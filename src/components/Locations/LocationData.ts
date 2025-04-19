export interface LocationItem {
  image: string;
  city: string;
  address: string;
  country: string;
}

export const locationData: LocationItem[] = [
  {
    image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    city: "Dubai",
    address: "Platinum Tower, 30th floor",
    country: "United-Arab-Emirates"
  },
  {
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    city: "Carros",
    address: "Le Broc Center – Bat C",
    country: "1ère Avenue, 5600 mètres, France"
  },
  {
    image: "https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    city: "Lausanne",
    address: "Switzerland",
    country: "Switzerland"
  }
];