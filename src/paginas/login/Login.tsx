import React, { useState, useEffect, ChangeEvent } from "react";
import {Grid,Typography, TextField, Button, InputAdornment,} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { Https, Person } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import Astro from "../login/ImgLogin/Astro.png";

function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      toast.success('Usuário logado com sucesso', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className="login">
        <Grid xs={6} >
          <img src={Astro} alt="" className="imagem"/>
        </Grid>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                    <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                    <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className="button">
                                Logar
                            </Button>
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Link>
                        
                </Box>
            </Box>
        </Grid>
    </Grid>
);
}

export default Login;