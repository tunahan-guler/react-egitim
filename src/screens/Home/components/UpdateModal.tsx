import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE } from '../../../graphql/Mutation/Example';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type UpdateModalProps = {
    open: boolean;
    handleClose: () => void;
    data: any;
    refetch:any;
}

export default function UpdateModal(props: UpdateModalProps) {
    const [desc, setDesc] = React.useState("");
    const [updateFunction, { loading }] = useMutation(UPDATE);

    React.useEffect(() => {
        if (props.data && props.data.desc) {
            setDesc(props.data.desc);
        }
    }, [props.data])

    const updateFunc = () => {
        updateFunction({
            variables: {
                prmEgitimTable: {
                    id: props.data.id,
                    desc: desc
                }
            }
        }).then((res) => {
            props.handleClose();
            if(res.data?.updateEgitimTable){
                props.refetch();
            }
        })
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Update
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                        multiline
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        fullWidth
                    />
                    <Button onClick={updateFunc} fullWidth>Güncelle</Button>
                </Typography>
            </Box>
        </Modal>
    );
}