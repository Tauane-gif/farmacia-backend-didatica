export default interface ClienteProduto{
   idProduto: number; 
   descricao: string; 
   validade?: Date; 
   preco: number; 
   qtdEstoque: number; 
   qtdMinEstoque: number;
}
