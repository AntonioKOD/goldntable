import React from "react";
import styled from "styled-components";

interface ProgramCardProps {
  title: string;
  description: string;
  badge?: string;
  onClick?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  badge,
  onClick,
}) => {
  return (
    <StyledWrapper>
      <div className="card" onClick={onClick}>
        {badge && <span className="badge">{badge}</span>}
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 240px;
    height: 300px;
    padding: 20px;
    background: #2d5a3d; /* Deep Forest Green */
    color: #fefefe; /* Cream White */
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  .card:active {
    scale: 0.97;
  }

  .card::after {
    content: "";
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ffd93d; /* Golden Yellow highlight */
    position: absolute;
    top: 260px;
    left: -150px;
    transition: top 0.3s ease-in-out;
    z-index: 1;
    opacity: 0.2;
  }

  .card:hover::after {
    top: -50px;
  }

  .card:hover {
    background: #ff6b6b; /* Warm Coral on hover */
    color: #fefefe;
  }

  .badge {
    position: relative;
    z-index: 10;
    font-size: 12px;
    font-weight: 600;
    background: #ffd93d; /* Golden Yellow */
    color: #2d5a3d; /* Deep Forest Green */
    padding: 4px 10px;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .title {
    position: relative;
    z-index: 10;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .desc {
    position: relative;
    z-index: 10;
    font-size: 14px;
    line-height: 1.5;
    color: #e8f5e8; /* Light Sage for contrast */
  }
`;

export default ProgramCard;