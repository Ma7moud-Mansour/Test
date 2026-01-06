import { useState } from 'react';

export default function InputScreen({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>What is your name?</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name here..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Show Me Magic
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    animation: 'fadeIn 1s ease-out',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#fff',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  input: {
    padding: '1rem',
    borderRadius: '10px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    fontSize: '1.1rem',
    outline: 'none',
    textAlign: 'center',
  },
  button: {
    padding: '1rem',
    borderRadius: '10px',
    border: 'none',
    background: '#ff4d6d',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s, background 0.2s',
  }
};
