import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function mapStateToProps(state) {
   return {
      dialogsPage: state.dialogsPage,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      sendMessage: (newMessageBody) => {
         dispatch(sendMessageCreator(newMessageBody));
      }
   }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);

