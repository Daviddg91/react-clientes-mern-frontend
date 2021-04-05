import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clientsStartLoading, clientStartDelete } from '../../actions/clients';
import { useHistory } from 'react-router';



 
export const DeleteClients = (props) => {
  const history = useHistory();
  history.push("/clientes/dashboardClient");
  const dni = props.match.params.dni;
  
  const dispatch = useDispatch();
  
  dispatch(clientStartDelete(dni));
 

return null;
}
