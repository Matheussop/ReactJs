import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/TransactionsContext';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useTransactions();

  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState('');

  function handleSetType(type: 'deposit' | 'withdraw'){
    setType(type);
  }

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({ type, title, amount, category });

    setType('deposit');
    setTitle('');
    setAmout(0);
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input type="number" placeholder="Valor" value={amount}
        onChange={({ target }) => setAmout(Number(target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox type='button' onClick={() => handleSetType('deposit')} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} alt="Enter" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type='button' onClick={() => handleSetType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} alt="Exit" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" 
         value={category}
         onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}