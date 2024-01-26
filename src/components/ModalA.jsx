import React from 'react'
import { Form, Modal } from 'react-bootstrap'

const ModalA = ({ modalState, setContactData,data, isLoading, checkbox, setCheckbox, dispatch, handleModalShowOne, handleModalCloseOne, }, ref) => {

    return (
        <Modal show={modalState.showModal1} size="lg" centered scrollable>
            <Modal.Header>
                <button className={`btn btn-lg modal_btn_a`} type="button" onClick={(e) => handleModalShowOne(e)}>All Contacts</button>
                <button className={`btn btn-lg modal_btn_b`} type="button" onClick={(e) => handleModalShowOne(e)} >US Contacts</button>
                <button className={`btn btn-lg modal_btn_c`} type="button" onClick={() => handleModalCloseOne()}>Close</button>
            </Modal.Header>
            <Modal.Body >
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.filter(item => checkbox === true ? item.id % 2 === 0 : item).map(item => (
                            <tr className='cursor-pointer' key={item.id} onClick={() => {dispatch({ type: 'showModalTwo', value: true }); setContactData(item)}}>
                                <td>{item?.phone}</td>
                                <td>{item?.country?.name}</td>
                            </tr>
                        ))
                        }

                        <tr key='0' ref={ref}>

                            {isLoading &&
                                <>
                                    <td>Loading...</td>
                                    <td>Loading...</td>
                                </>
                            }
                        </tr>


                    </tbody>
                </table>

            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-start'>
                <Form.Check
                    type='checkbox'
                    id='0'
                    label='Show Even'
                    value={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                />
            </Modal.Footer>
        </Modal>
    )
}

const forwardedModalA = React.forwardRef(ModalA)

export default forwardedModalA