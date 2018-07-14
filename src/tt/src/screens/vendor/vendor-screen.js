import * as React from 'react';
import { firebaseData, fireTreeToArray, refs } from '../../service/firebase-service';

export default class HomeScreen extends React.Component {

  state = {};

  onBack = () => {
    window.history.back()
  }

  // sample snippet: showing how to use firebase-service
  async useFirebase() {

    // add a vendor
    await refs.vendors().push({ name: 'Sample vendor' })

    // get all vendors
    const vendorsById = await firebaseData.vendors()

    // convert vendors to an array
    const vendors = fireTreeToArray(vendorsById)

    // first vendor id
    const vendorId = vendors[0].id

    // get a vendor by its id
    const vendor = await firebaseData.vendorById(vendorId)

    // update a vendor
    await refs.vendorById(vendorId).update({ name: 'New Vendor Name' })

    // remove a vendor
    await refs.vendorById(vendorId).remove()
  }

  componentDidMount() {
    this.useFirebase()
  }

  render() {
    const { match } = this.props
    const { vendorId } = (match && match.params) || {}
    return <div className="page">
      <h1>Vendor</h1>
      <h2>{vendorId}</h2>
      <button onClick={this.onBack}>Back</button>
    </div>
  }
}
