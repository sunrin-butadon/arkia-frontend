import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        fontSize: '8rem',
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        404
      </div>
      
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '1rem'
      }}>
        페이지를 찾을 수 없습니다
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#7f8c8d',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        URL을 다시 확인해주세요.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link 
          to="/" 
          style={{
            padding: '12px 24px',
            backgroundColor: '#3498db',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}
        >
          🏠 홈으로 돌아가기
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          style={{
            padding: '12px 24px',
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          ⬅️ 이전 페이지로
        </button>
      </div>
      
      <div style={{
        marginTop: '3rem',
        fontSize: '4rem',
        opacity: 0.3
      }}>
        🤖
      </div>
    </div>
  );
}
