import { connect } from 'react-redux'
import Stag from '../components/stag'

const mapStateToProps = (state) => state.current

export default connect(mapStateToProps)(Stag)
