export const TOKEN_CHAVE = "@board-token"; //define a chave do token
export const estaAutenticado = () => localStorage.getItem(TOKEN_CHAVE) !== null; //verifica se o usúario está autenticado buscando no local storage se existe um token armazenado
export const getToken = () => localStorage.getItem(TOKEN_CHAVE) //retorna o token
//ao logar armazena o id do usúario juntamente com sua chave
export const login = token =>
{
    localStorage.setItem(TOKEN_CHAVE,token);
};
//ao deslogar remove o id do usúario a partir da sua chave
export const deslogar = () =>
{
    localStorage.removeItem(TOKEN_CHAVE);
};
