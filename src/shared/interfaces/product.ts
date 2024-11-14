export default interface ProductInterface {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
  quantity?: number,
  category: string
}