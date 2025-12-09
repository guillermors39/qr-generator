import { useState, useRef } from 'react'
import QRCode from 'qrcode'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQRCode = async () => {
    if (!text.trim()) {
      alert('Por favor, ingresa algún texto para generar el código QR')
      return
    }

    setIsLoading(true)
    try {
      const dataURL = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
      setQRCodeDataURL(dataURL)
    } catch (error) {
      console.error('Error generando el código QR:', error)
      alert('Error al generar el código QR')
    } finally {
      setIsLoading(false)
    }
  }

  const downloadQRCode = (format: 'png' | 'jpeg') => {
    if (!qrCodeDataURL) return

    const link = document.createElement('a')
    link.href = qrCodeDataURL
    link.download = `qr-code.${format}`
    
    // Convert to JPEG if needed
    if (format === 'jpeg') {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        
        // Fill with white background for JPEG
        ctx!.fillStyle = '#FFFFFF'
        ctx!.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx!.drawImage(img, 0, 0)
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            link.href = url
            link.click()
            URL.revokeObjectURL(url)
          }
        }, 'image/jpeg', 0.9)
      }
      
      img.src = qrCodeDataURL
    } else {
      link.click()
    }
  }

  const clearQRCode = () => {
    setText('')
    setQRCodeDataURL(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔲 Generador de Códigos QR</h1>
        <p>Ingresa texto y genera códigos QR exportables</p>
      </header>

      <main className="app-main">
        <div className="input-section">
          <label htmlFor="text-input">
            Texto para el código QR:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí el texto, URL, o cualquier información que quieras convertir en QR..."
            rows={4}
            maxLength={2000}
          />
          
          <div className="button-group">
            <button 
              onClick={generateQRCode} 
              disabled={isLoading || !text.trim()}
              className="generate-btn"
            >
              {isLoading ? 'Generando...' : 'Generar QR'}
            </button>
            
            {qrCodeDataURL && (
              <button onClick={clearQRCode} className="clear-btn">
                Limpiar
              </button>
            )}
          </div>
        </div>

        {qrCodeDataURL && (
          <div className="qr-section">
            <div className="qr-display">
              <img src={qrCodeDataURL} alt="Código QR generado" />
            </div>
            
            <div className="download-section">
              <h3>Descargar como:</h3>
              <div className="download-buttons">
                <button 
                  onClick={() => downloadQRCode('png')}
                  className="download-btn png-btn"
                >
                  📥 PNG
                </button>
                <button 
                  onClick={() => downloadQRCode('jpeg')}
                  className="download-btn jpeg-btn"
                >
                  📥 JPEG
                </button>
              </div>
            </div>
          </div>
        )}

        {text.length > 0 && (
          <div className="character-count">
            {text.length}/2000 caracteres
          </div>
        )}
      </main>
      
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  )
}

export default App
