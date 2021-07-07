import styled from "styled-components";

function Marker({ key, lat, lng }) {
  const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Wrapper
      key={key}
      lat={lat}
      lng={lng}
    />
  );
}

export default Marker;
