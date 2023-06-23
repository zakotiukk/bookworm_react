/*const tg = window.Telegram.WebApp;

export function useTelegram() {
    
    const onClose =()=> {
        tg.close()
      }
      const onToggleButton =()=> {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
      }
    return {
        onClose,
        onToggleButton,
        tg,
        user:tg.initDataUnsafe?.user,
    }
}*/
const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  const sendMessage = (message) => {
    tg.sendMessage(message);
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe ? tg.initDataUnsafe.user : null,
    sendMessage,
  };
}
