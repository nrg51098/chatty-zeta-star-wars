import moment from 'moment';
import messagedata from '../helpers/data/messageData';
import utils from '../helpers/utils';

const messages = messagedata.getMessageData();

const messageLimit = () => {
  if (messages.length > 19) {
    messages.splice(0, 1);
  }
};

const displayMessages = () => {
  let domString = '<div id="messageArea>';

  for (let i = 0; i < messages.length; i += 1) {
    const cleanTime = moment(messages[i].timestamp).format('MMMM Do, h:mm a');
    domString += `
                <div class="newMessage">
                <div class="messageHead mb-0">
                <p class="userName mb-0">${messages[i].userId}</p>
                <h6 class="timestamp mb-0">${cleanTime}</h6>
                <p class="delete mb-0"><i class="fas fa-times-circle"></i></p>
                </div>
                <div class="messageBody">
                <p class="message">${messages[i].body}</P>                    
                </div>
                </div>`;
  }

  utils.printToDom('#messageArea', domString);
  messageLimit();
};

export default { displayMessages };
