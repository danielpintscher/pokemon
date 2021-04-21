import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.header`
    padding: 2em;
    background-color: #E3350D;
    color: #FFF;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const SmallLink = styled.span`
    display: inline-block;
    padding: 1em 2em;
    border-radius: 1em;
    margin-left: 2em;
    font-size: 1rem;
    background-color: #e6bc2f;
    border: none;
    color: #FFF;
    font-size: .5em;
    font-weight: 500;

    a {
        text-decoration: none;
    }

    &:hover {
        background-color: #FFF;
        color: #e6bc2f;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 1em;

    li {
        width: 15vw;
        height: 15vw;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin: 1em;
        background-color: #FFFFFF;
        border-radius: .5em;
        transition: all .2s ease-out;
        cursor: pointer;
        border: solid .5em;
        border-color: #1b53ba;
        background: url('https://medias.cnnbrasil.com.br/ash-e-pikachu-de-pokemon.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/02/27618_80A9793192A037B6.jpg&width=804&height=536&resize=CROP') no-repeat center center;
        background-size: cover;

        &:hover {
            box-shadow: 0 .3em .5em rgba(0,0,0,.2);
            background-color: #EDEDED;
            border-color: #FFFFFF;
        }

        span {
            display: inline-block;
            background-color: #FFFFFF;
            border-radius: 1em;
            padding: .5em 1em;
            box-shadow: 0 .5em 1em rgba(0,0,0,.5);
            margin-bottom: 1em;
        }
    }

`;

export const Search = styled.input`
    border: none;
    border-radius: .5em;
    padding: 1.2em 2em;
    min-width: 20vw;
    font-size: 1.2em;
    font-weight: bold;
    color: #999;

    &::placeholder {
        color: #1b53ba;
    }

    &:focus {
        outline: none;
        border: none;
    }
`;

export const Detail = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);

    .content {
        position: relative;
        background-color: #FFF;
        border-radius: 1em;
        padding: 2.5em 2em 2em;
        border: solid 1em #e6bc2f;

        button {
            border: none;
            border-radius: .5em;
            font-size: 1em;
            background-color: #1b53ba;
            color: #FFF;
            font-weight: 700;
            padding: .8em 1.5em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            svg {
                margin-right: 10px;
            }
        }
    }
`;

export const Close = styled.a`
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 100%;
    border: none;
    background-color: #1b53ba;
    width: 2em;
    height: 2em;
    text-align: center;
    line-height: 2em;
    color: #FFF;
    font-weight: 700;
    cursor: pointer;
    border-radius: 100%100%;
    padding: 0;
`;