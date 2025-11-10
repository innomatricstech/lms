// logoutHandler.js
let openConfirmModal = null;

export const registerLogoutModal = (fn) => {
  openConfirmModal = fn;
};

export const confirmAndLogout = async (logout, navigate) => {
  if (openConfirmModal) {
    openConfirmModal(async () => {
      await logout();
      navigate('/');
    });
  }
};
