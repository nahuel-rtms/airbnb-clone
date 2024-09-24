import { Bathtub, Bed, Cube } from "@phosphor-icons/react";

function PopupCardInfo({ name, neighbourhood, price, host_name }) {

  return (
    <div style={{ width: '100%', height: '40%', padding: '0.75rem' }}>
      <div style={{ height: '60%' }}>
        {/* Estilos combinados directamente */}
        <p style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {name}
        </p>
        <p style={{ fontWeight: 300 }}>{neighbourhood}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>$ {price}</p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', height: '20%', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Bathtub size={20} weight="thin" />
          <p style={{ fontWeight: 100 }}>2</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Bed size={20} weight="thin" />
          <p style={{ fontWeight: 100 }}>2</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Cube size={20} weight="thin" />
          <p style={{ fontWeight: 100 }}>2</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', height: '20%' }}>
        <p style={{ fontWeight: 100, fontSize: '0.875rem' }}>
          Anunciado por <span style={{ color: 'red' }}>{host_name}</span>
        </p>
      </div>
    </div>
  );
}

export default PopupCardInfo;
