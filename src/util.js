import { connect } from "react-redux";

const mapStoreToprops = (component, object) => {
    const callBackToConnec = object => object;
    return connect( callBackToConnec )( component );
}
export default mapStoreToprops;