import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  ChevronLeft, 
  Plus,
  Calendar,
  Clock,
  MapPin,
  Heart,
  Trash2
} from "lucide-react";

import "../styles/DiaryPage.css";

const DiarioAnsiedadeList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem("anxiety-diary-entries");
    if (storedEntries) {
      const parsedEntries = JSON.parse(storedEntries).map((entry) => ({
        ...entry,
        date: new Date(entry.date),
        createdAt: new Date(entry.createdAt)
      }));
      // Ordenar por data e hora mais recente
      parsedEntries.sort((a, b) => {
        const dateA = new Date(`${format(a.date, "yyyy-MM-dd")} ${a.time}`);
        const dateB = new Date(`${format(b.date, "yyyy-MM-dd")} ${b.time}`);
        return dateB.getTime() - dateA.getTime();
      });
      setEntries(parsedEntries);
    }
  }, []);

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem("anxiety-diary-entries", JSON.stringify(updatedEntries));
    alert("Registro excluído com sucesso!");
  };

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case "1": return "intensity-1";
      case "2": return "intensity-2";
      case "3": return "intensity-3";
      case "4": return "intensity-4";
      case "5": return "intensity-5";
      default: return "intensity-default";
    }
  };

  return (
    <div className="diario-ansiedade-container">
      <div className="diario-ansiedade-wrapper">
        {/* Header */}
        <div className="diario-header">
          <Link to="/home">
            <button className="back-button">
              <ChevronLeft className="back-icon" />
            </button>
          </Link>

          <Link to="/diario-ansiedade/novo">
            <button className="new-record-button">
              <Plus className="button-icon" />
              Novo Registro
            </button>
          </Link>
        </div>

        {/* Main Card */}
        <div className="main-card">
          <div className="card-header">
            <h3 className="card-title">
              <Heart className="title-icon" />
              Diário da Ansiedade
            </h3>
            <p className="card-subtitle">
              Seus registros de ansiedade organizados por data e hora
            </p>
          </div>

          <div className="card-content">
            {entries.length === 0 ? (
              <div className="empty-state">
                <Heart className="empty-icon" />
                <h3 className="empty-title">
                  Nenhum registro encontrado
                </h3>
                <p className="empty-description">
                  Comece registrando sua primeira experiência de ansiedade
                </p>
                <Link to="/diario-ansiedade/novo">
                  <button className="create-first-button">
                    <Plus className="button-icon" />
                    Criar Primeiro Registro
                  </button>
                </Link>
              </div>
            ) : (
              <div className="entries-list">
                {entries.map((entry) => (
                  <div 
                    key={entry.id} 
                    className="entry-card"
                  >
                    <div className="entry-content">
                      <div className="entry-header">
                        <div className="entry-dates">
                          <div className="date-info">
                            <Calendar className="info-icon" />
                            <span className="date-text">
                              {format(entry.date, "dd 'de' MMMM, yyyy", { locale: ptBR })}
                            </span>
                          </div>
                          <div className="time-info">
                            <Clock className="info-icon" />
                            <span>{entry.time}</span>
                          </div>
                        </div>
                        
                        <div className="entry-actions">
                          <span className={`intensity-badge ${getIntensityColor(entry.intensity)}`}>
                            Intensidade {entry.intensity}/10
                          </span>
                          <button
                            onClick={() => deleteEntry(entry.id)}
                            className="delete-button"
                          >
                            <Trash2 className="action-icon" />
                          </button>
                        </div>
                      </div>

                      <div className="entry-details">
                        <div className="detail-item">
                          <div className="detail-label">
                            <MapPin className="label-icon" />
                            Local
                          </div>
                          <p className="detail-value">{entry.location}</p>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">
                            <Clock className="label-icon" />
                            Duração
                          </div>
                          <p className="detail-value">{entry.duration}</p>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">
                            <Heart className="label-icon" />
                            Emoção
                          </div>
                          <p className="detail-value">{entry.emotion}</p>
                        </div>
                      </div>

                      <div className="trigger-section">
                        <div className="trigger-label">
                          Motivo desencadeante
                        </div>
                        <p className="trigger-text">
                          {entry.trigger}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiarioAnsiedadeList;