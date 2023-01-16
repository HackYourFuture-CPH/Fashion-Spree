import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './modal.styles.css';

const Modal = ({ toggle, open, title, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = '');
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={toggle} role="presentation" className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="presentation"
        className="modal-container"
      >
        <div className="modal-wrapper">
          <h2>{title}</h2>
          <button
            type="button"
            onClick={() => toggle()}
            className="modal-close-btn"
          >
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
