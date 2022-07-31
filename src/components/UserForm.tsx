import { useState } from 'react';
import axios from 'axios';
import styles from './UserForm.module.scss';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    cep: '',
    city: '',
    state: '',
    streetAddress: '',
    neighborhood: '',
    number: '',
    complement: '',
}

export function UserForm() {
    const [values, setValues] = useState({initialValue});

    function onChange(event) {
        const { name, value } = event.target;

        setValues({...values, [name]: value});
    }

     async function onSubmit(event) {
        event.preventDefault();
        
        try {
            await axios.post('https://doar-computador-api.herokuapp.com/donation', values),
            alert('Dados enviados com sucesso!')
        } catch (error) {
            alert(`Erro ao enviar dados. Mensagem: ${error.message} Tente novamente mais tarde.`)
        }
   }

    return (
        <div className={styles.bodyContent}>
            <main className={styles.mainContainer}>
                <form onSubmit={onSubmit} className={styles.mainContent}>

                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Nome Completo</label>
                        <input 
                        name="name" 
                        type="text" 
                        id="name" 
                        required
                        onChange={onChange}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input 
                        name="email"
                        type="text" 
                        id="email"
                        onChange={onChange} 
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="phone">Telefone</label>
                        <input 
                        name="Telefone" 
                        type="number" 
                        id="phone" 
                        required
                        onChange={onChange}
                        />
                    </div>

                     <div className={styles.inputContainer}>
                        <label htmlFor="cep">CEP</label>
                        <input 
                        name="cep" 
                        type="number" 
                        id="cep" 
                        required
                        onChange={onChange}
                        />
                    </div>

                     <div className={styles.inputContainer}>
                        <label htmlFor="city">Cidade</label>
                        <input
                        name="city" 
                        type="text" 
                        id="city" 
                        required
                        onChange={onChange}
                        />
                    </div>

                     <div className={styles.inputContainer}>
                        <label htmlFor="state">Estado</label>
                        <input 
                        name="state" 
                        type="text" 
                        id="state" 
                        required
                        onChange={onChange}
                        />
                    </div>

                     <div className={styles.inputContainer}>
                        <label htmlFor="streetAddress">Endereço</label>
                        <input 
                        name="streetAdress" 
                        type="text" 
                        id="streetAddress" 
                        required
                        onChange={onChange}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="neighborhood">Bairro</label>
                        <input 
                        name="neighborhood"
                        type="text" 
                        id="neighborhood" 
                        required
                        onChange={onChange}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="number">Número</label>
                        <input 
                        name="number" 
                        type="number" 
                        id="number" 
                        required
                        onChange={onChange}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="complement">Complemento</label>
                        <input 
                        name="complement" 
                        type="text" 
                        id="complement"
                        onChange={onChange} 
                        />
                    </div>
                
                    <div>
                        <button type="submit">Enviar Cadastro</button>
                    </div>
                </form> 
            </main>
        </div>
  );
}
