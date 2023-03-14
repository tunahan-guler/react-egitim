import { useMutation, useQuery } from '@apollo/client';
import { Alert, Button, List, ListItem, ListItemText, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DELETE, INSERT } from '../../graphql/Mutation/Example';
import { GET_EGITIMDATA } from '../../graphql/Query/Welcome';
import UpdateModal from './components/UpdateModal';
import UserData from './components/UserData';
import Welcome from './components/Welcome';

const Home = () => {
    const [ins, { loading }] = useMutation(INSERT);
    const [deleteEgitim, { loading: loadingDelete }] = useMutation(DELETE);
    const { handleSubmit, control, reset } = useForm();
    const { data, loading: loadingEgitimData, refetch } = useQuery(GET_EGITIMDATA);
    const [snackBarState, setSnackBarState] = useState<any>({
        open: false,
        message: "",
        type: "success"
    });

    const [open, setOpen] = useState(false);
    const [clickedData, setClickedData] = useState<any>(null);

    const onSubmit = (data: any) => {
        ins({
            variables: {
                prmEgitim: {
                    id: 0,
                    desc: data.desc
                }
            }
        }).then((res) => {
            if (res.data?.insertEgitimTable) {
                setSnackBarState({
                    open: true,
                    message: "Başarılı",
                    type: "success"
                })
                refetch();
                reset();
            } else {
                setSnackBarState({
                    open: true,
                    message: "Hata Var",
                    type: "error"
                })
            }
        })
            .catch(() => {
                setSnackBarState({
                    open: true,
                    message: "Hata Var",
                    type: "error"
                })
            });
    }

    if (loading || loadingEgitimData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Snackbar open={snackBarState.open} autoHideDuration={4000} onClose={() => setSnackBarState({ ...snackBarState, open: false })}>
                <Alert onClose={() => setSnackBarState({ ...snackBarState, open: false })} severity={snackBarState.type} sx={{ width: '100%' }}>
                    {snackBarState.message}
                </Alert>
            </Snackbar>
            <Welcome />
            <UserData />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='desc'
                        control={control}
                        render={({ field: { onChange, value } }) => <TextField
                            multiline
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Button type="submit" variant="outlined">Submit</Button>
                </form>
            </div>
            <div style={{ height: "50vh", overflow: 'scroll' }}>
                <List>
                    {data?.egitimData.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.id} secondary={item.desc} />
                            <Button onClick={() => {
                                setOpen(true);
                                setClickedData(item);
                            }}>Update</Button>
                            <Button onClick={() => {
                                deleteEgitim({
                                    variables: {
                                        prmId: item.id
                                    }
                                })
                                    .then((res) => {
                                        if (res.data?.deleteEgitimTable) {
                                            setSnackBarState({ open: true, message: `Başarılı ${item.id} numaralı kayıt silindi`, type: "success" })
                                            refetch();
                                        } else {
                                            setSnackBarState({ open: true, message: "Hata Var", type: "error" })
                                        }
                                    })
                            }}>Delete</Button>
                        </ListItem>
                    ))}
                </List>
            </div>
            <UpdateModal
                open={open}
                handleClose={() => setOpen(false)}
                data={clickedData}
                refetch={refetch}
            />
        </div>
    )
}

export default Home