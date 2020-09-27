import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const CardOptions = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: '50px',
      font:'Arial'
    },
    media: {
      height: 200,
      width:200
    },
  }));
  
      const classes = useStyles();  
  return (
    <div className={classes.root}>
       <Card className={classes.cardRoot}>
     
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.logojoy.com/wp-content/uploads/2018/05/01112536/5_big12.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Text upload
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"href="/textArea">
          Open
        </Button>
      </CardActions>
    </Card>
   
    
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISERAWFRUWFRIVFxUXFRAYGBcTFRYWFhUVFRYYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGzclICUtNS0tMDcwKy0zLy0tKy0tLy0tMDUvLS0wLS0tLS0tLS0rLS8tLS0tLS0tLS0tLS0tLf/AABEIALEBHAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwECBAUHCAb/xABCEAABAwIDAgkJBgYBBQAAAAABAAIRAyEEEjFBUQUGBxNhcZGhsiIzc4GSo7HS0xQyNFRywRcjU2Jj0UNCRFKDov/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECBgP/xAAuEQEAAgIBAgQEBgIDAAAAAAAAAQIDEQUEIRIyNHExYaHREzNBkbHBIvBCUYH/2gAMAwEAAhEDEQA/AOzMaZFjqgdVcCIBlAuhY3t1oJr3iL9SC1EwL260CqjSSYCB+cRqNECKbSCCQgbWMi1+pBWhaZt1oIrXNr9SBlJwAAJhAl7TJsdSge94g3GiBNIQZNkF65kCL9SAoGJm3WgrWEmRfqQNpuAABKBAaZ0OqB1VwIIBlAuiIN7daC1e8RfqQTQMC9r7UC6oJJIEoHNeIFxogQxpkSEDqzgRAMoKULEzbrQFe8RfqQXouAEGyBNRpJMBA8vEajRAmk0ggkQgZWMi177ECMh3HsKDIdVBEDagWxhBk6ILVDmsEBT8nXagrUbmMjRAxlQAQdQgVzZmY6UDH1ARA1KD47jZx3p4J/NMZztaJLc0NYDcZze8XyjZusg+RqcqWMP/AA4f2a31EAzlTxg0o4f2K31EEO5UMYb8zh/ZrfUQWHKpjf6WH9it9RBQcp+M/o4f2a31EF3cqeNNjSw/sVvqIKs5UcYNKOH9it9RAP5UcYdaOH9it9RBLeVPGjSjh/YrfUQVdyoYw/8ADh/ZrfUQX/ipjf6WH9it9RBRvKhjBfmcP7Nb6iCz+VPGnWjh/YrfUQDOVLGDSjh/YrfUQQ/lRxh1o4f2K31EFm8qeNFuaw/sVvqIKHlPxn9HD+zW+ogzcDyrVpjEYem5h1NLO1wG8BxId1SEHSeCsYyrTZXpuDqbxId3QRsIMgjYQgyqhzaICmcuqCr2lxkaIGNqACDsQKFM6x0oGPeCIGqCtMZTJ6kDOebv+KBYokX3XQSamawQQ1uW56kA7y9NiCWvy2KCDSLr70E88NI6EENpEX3IPOvDeIdUxFd7jJdVqk+2YHqFvUgwkAgEAgEAgEAgEAgEAgEAgEAgEAg6zyPVnOw1emTZtYFvRmYJHa2fWUH3zRkudqAcM+mxBLX5bFBBpE33oJ54G0dCCBTLbnYglzs1h1oK/ZzvCCeem0a2QSaeW+qADs9tNqAJydMoAMzX0QRzuW0aIJ5nbPSggVZtGqDzhwj56t6Sp4ygx0AgEAgEAgEAgEAgEAgEEsaSYAJO4XPYsWtFY3M6ZiJmdQmowtJDgQRqCCCOsFYrato8VZ3Bas1nUqrZgIBB1TkbMUcSd1VngQdDBz20hBJOS2soAMzX0QRzsWjRBPMxeelBHOZrRqgkty312II+0dCCzqQFxsugo15cYOiCz25bhAMGbXYgh7i2wQWbTBEnagpzp09SC5pgXCDzbwif51b0lTxlBjoBAIBAIBAIBAIBBelSc4wxpcdwBJ7AtL5K0jdp1DatbWnVY222E4tV3/eApj+4yewfvCq8/NdNj7VnxT8vunYuNzX+PZucJxWotu9znn2R2C/eqjPzue/akRX6ysMXF4q+ed/RucPhmMEMY1o6AB271UZc+TLO72mU/HipSNVjT4vjX+Jd+lnwXYcL6SPef5c/yXqJ9oahWqAEAg6ryM3o4kf5GeBB0R4y6IBgzaoIe8tMBBZtIG52oKCqdPUgu6mGiRqEFWOzWPWgvzAQJa8kgEoHVWgCRYoKUTJvdAVrRFkFqTQRJugXUeQSAUDsgiYQJpvJIBKDzjwl56t6Wp4ygxkAgEAgEAgEDcPhn1DFNjndQJ7TsXllz48UbvaIb0xXv2rG24wnFas67y1g9o9gt3qpz85gp2pE2+kJ+Pi8tvN2brCcWaDLuBqH+427B+8qoz831OTtX/GPl91jj4zDXzd23o0mtEMaGjcAAOwKqyZb5J3edp1aVrGqxpdaNggEHw3Gv8S79LPgu04X0ke8/wAub5L1E+0NOrZACAQdV5G/MYo7edZ4EHRKJnW6ArGNLILUmgiTdAt7yCQCgcWCJhAmm4kgE2QMrCBIsgTzp3oMh5EHTRAmkDN+9AyvpbuQRQ2z3oK1tbdyBtOIEoEQZ269KB74iyDzVwj56r6Sp4igx0AgEESgycJgatTzdNzukC3tGy8M3VYcP5loh648GTJ5a7bnCcU6hvUeGdA8o/6HeqfPz2KvbHWZ+kfdYY+KvPnnX1brCcXcOzVmc73me7TuVRn5jqsvaLeGPl9/isMXH4afpv3bVjQBAAA3CwVZa02ncztNisRGohKwyEAgEAgEHwvGz8S79LPgu04X0ke8/wAub5L1E+0NOrZASgEHVuRfzWJ3c4zwIOiV9kdyAobZ70Fa2tu5A2mRAlAhoM7delA6rEGEC6Ot921A+R0dyDHbTIIJCBlR4IgXKCtIZTJsgKvlRF0FqTgBBsgW9hJJAsgbzgiJQKYwggkIPN/CZ/nVvS1fGUGMgEAg+04ucFUuZZUcwOe6TLhMXMAA2C5Hlevz/j2xVtqI7dnQdB0uP8KLzG5lv1STO/isojQWGQgEAgEAgEAghxAuTA3rMVmZ1DEzEd5fA8ZMQ1+Ie5hkQ0SNCQLwu44rFfF0ta3jU95cz12St88zX4NWrFDCAQdX5Gr0MUNvOs8CDolIZdbICr5Wl0FqbgBBsUC3sJJICBpqCIlApjCDJFkDKrswgXQK5p25A01Qbb7IKtYW3KCXnNYdd0Azyddu5BDmZrhBZtUCx2IKc0dbb0FzVBsEHmvhLz1b0lTxlBjIBAIOhcXfw1H9P7lcJynq8nv/AE6jofT1bFQEsIBAIBAIK1KgaJc4NG8kAdpW1KWvOqxuWtrRWNzOmoxfGXDss1xef7Rb2jbslWmDhepyd7R4Y+f2QcvJYafCdtLi+NdV1qbWsG/7zu+3crjBwWCnfJM2+kfdX5eUy28kaaXFYupUM1Hud1kx6hoFbYunxYY1jrEIGTLfJ5p2SvZ5hAIBB1fkXMUcSf8AKzwIOivOaw70Aw5ddu5BDmZrhBYVQLHYgoKJ1tvQXdUDrDagq1uW56rIL8+OlBTmYvOl+xBPOZrRCCMuS+uxBMZ+iPWgM+W2qCOazXmJQTz2yOhAClF50Qea+Ej/ADq3panjKDGQCAQdD4u/hqP6f3K4TlPV5Pf+nUdD6erYqAlhAIBAIFYikXNID3MP/k3LP/0CF6Yr1pbc138paZKzauonT5bhLizXJzCtzv6yQ71TI+C6XpOZ6eseGaeD2+Cmz8dmmdxbxe7Q4rA1afnKbm9JFu3Qq6w9Vhzfl2iVbkw5MfmjTHXu8ggEAgEAg6vyMCaOJG+qzwIOixkvrPqQEZ76R60E58ttUEczN51QTz02joQRzeW8zCCc2e2m1BH2fp7kECsTa17ILOp5bhBDTmseuyCXeTpt3oBrM1z3IKmqRYbEF+ZGt96CrapNjtQea+EvPVvS1fGUGOgEAg6Fxd/DUf0/uVwnKerye/8ATqOh9PVslASwgEAgEAgEEELMTMd4YmNtbi+AcPU1p5TvZ5J7BbuVhg5XqsXwtuPn3RMvQ4L/APHXs0mL4ouF6VQHoeIPtCx7ArjBz9J7Za6+cfZX5OKtHfHbb53E0HU3FjxDm2I71e4stMtIvSdxKryY7Y7eG0dy16NAgEHV+RgxQxR3VWeBB0VpzWPcgHHLpt3oJazNc9yCpqkWGxBfmRrfegqKhdY7UEubluOq6Cv2g9HegY6mACQNOtAum4kwTZBaqMtxZAUhm+9dBWo4tMCwQMZTBEkXQK5wzE9GxA11MC4CDzPwkf51b0lTxlBjoBAIN3wRxjfRaKZYHsExeHAEzE7QqjreIx9ReckTq30lYdNyF8NfDMbh9DhOM2Hfq4sO54t7QkdsKiz8N1OPvEeKPktMXI4b/Gde7b06gcJaQRvBBHaFV3pak6tGpTq2i0biVlrpkIBAIBAIBAIPg+N34l36WfBdrwvpI95/lzfJeon2hplaoAQCDrHIreliRs51ngQdGqjLpZAUhm1ugrUcQYFggYymCASLlAoVDMT0bEDHsAEjVBWkcxg3QM5lu74oEMJka69KB1UCLdyBdC5v3oJr2iO5BajpfvQKqEyYlA+BGzRAmmTImUHmzhPz1b0tXxlBjIBAIBAIG0MQ9hlj3NO9pI7Y1XnkxUyRq9Yn3b0yWpO6zpucHxqrts8NqDpGU9o/0qrPwfT3703Wf3j9k7FyeWvm7t/wZxip1TGR7T+kub7TdPXCo+r4nJgjfiiY99T+y06fr6Ze2pif9/VuGuB0KqpjSclAIBAIBB8Fxu/Eu/Sz4LtOF9JHvP8ALm+S9RPtDTK2QAgEHWORjzGK9KzwIOjULkz3oCvaI7kF6MRfvQJqEyYlA8gRs0QJpEyJQMraW37ECMx3nvQZL3ggidiBNJpBkiEF6xkWugKNpmyCtUSZF0DKbwAASgTkMzG1A97wRAKDzLwl56t6Wp4ygxkAgEBKDJwmAq1fN03O6QLe0bKPm6rDh/MtEPXHgyZPJG27wnFKob1HtZ0Dyj/od6qc3PYq9sdZn6LDFxV5886+rcYXi5QZ/wBGc73me7TuVTm5fqcv66j5ff4rDHx+Cn6b92wFEAQBA3DRV83m07mUyKxEahXm9yeI0s2q4dPWsTWssmNxI2iO9YnH/wBGzWvB0K0mJhlZYAg+C43/AIl36WfBdpwvpI95/lzfJeon2hpVbIAQCDrPIp5rEn/KzwIOj1jMRdAUbTNkFarZMi6BrHgAAlAgMMzG1A6o4EEAygXREGTayB3ODegSKRFzsugu94cIGqCrBluUBU8rTYgljstigq6mTcbUDOdGnqQLZTIIJQeauE/PVvS1fGUGMgEAg+34s8E0eZZUdTDnuky4TFzAANhouR5Xr8/49sVbTER27Og6Dpcf4UXmNzL6CFSTMys9IhYBCCC1Z2KlqzsVLFnbChprOxQ01t4mNJD3Db2pqJF/tQF3CBv2LEYpmdVJtEd5fB8ZcU2piHuYZENE7CQLwu04rDfF01a3jU95/dzXXZK3zzNfg1isUMIBB1nkWvQxQ286zwIOjUxluUBUGbRBZjw0QUFHUybjagYaoiPUgW1hBk6ILPdmsOtBTmCgua02jWyCBTy3QSXZ7abUADk6ZQQWZr6IJFXLaNEEcztnpQTzs2jVB5n4T89W9LV8ZQYyAQCDo3Fv8NR/T+5XCcp6vJ7/ANOo6H09WyUBLCAQCAQRCClV7WiXODRvJAHaVvSlrzqsblra1axuZ002M4y4dn3Sah/tFvaNuyVa4OG6nJ3tHhj5/ZBy8lhp8O/s0eL41VXeba1g3/ePabdyt8HB4ad7zNvpCvy8pkt5I19WmxOKfUM1Hud1kx6hoFbYsGPFGqViEDJlvkn/ACnZK9XmEAgEHWuRQxRxR3VWeBB0cnPbSEADk6ZQQWZr6IJ52LRogjmYvPSgk1M1o1QQG5b67EE/aOhAGjF50uggVM1kEluW4vsQAGfW0IIL8tggkUs151QRzx0joQW5qLzog8y8Jn+dW9LV8ZQY6AQCDo3Fv8NR/T+5XCcp6vJ7/wBOo6H09WyUBLCAQKxGJYwS97Wje4gfFeuLBkyzqlZlpfLSkbtOmkxnGyg2zA6oegZW9pv3K1wcHnv3vqv1lAy8pir5e7SYzjVXfZmWmOgSe137AK4wcJ01O9t2V2Tks1vL2aWvXc8y9xcd7iT8Va48VMcapEQg3va87tO1Fu1CAQCAQCAQdZ5FBNHFD/KzwIOkEZLi8oADPraEEF+WwQSKU3nVBHPE2joQSaeW+5BAdmsbbUFvs43oFiqTY7bIGPYGiRqgrTOaxQFTydNqC1NocJKCjqhBgaBAzmhE+tAtlQkgFB5o4U89W9LV8bkGMgEAg6Pxb/DUf0/uVwnKerye/wDTqOh9PVlYvHUqXnKjW9BIn1DUrww9LlzTqlZl7ZM+PH5p00eM44Um2pMc87z5Le+/crbBwOW3fJMR9Z+yvycrjjyRv6NFjOM2Ifo4MG5gg+0ZPZCt8HD9Ni7zHin5/ZX5eRz3+E69moqVC4y4kneSSe0qzrStY1WNQhTaZncyhbMBAIBAIBAIBAIBB1rkVMUMUdvOs8CDo9M5tUBUOXRBZjA4SdUFHVCLDYgYaQifWgWx5Jg6ILVG5bjqQU5470DnsABtsQJpOkwTKC9YQLWQFC8zdBWsYMCyBtNoIBIQIzmYnage9oAkBB5i4T89W9LV8ZQYyAQCDMZwrXDBTbVcGCYAga31F+9RbdFgtk/EtSJt/v8A4946nLFPBFuzEJm513qTEREah4zO+8oWWAgEAgEAgEAgEAgEAgEHW+RHzWJH+VngQdIriIiyAoCZm6CtUwYFkDWMBAJCBAeZidqB1VoAJAhAuiZN72QP5sbggxmNMix16UDqrgRAMoF0LG9utBNe8RfqQWomBe3WgVUBJMAoH5hGo0QIpggiQg818MMLcRXaRBFasD1h7kGIgEAgEAgEAgEAgEAgEAgEAgEAgEHXORZh+zYoxY1mgdJDGk/EIOjULEzbrQFe8RfqQXokAXt1oE1GmTAKB5cI1GiBNIEESEDK5kWvfYgRkO49hQZDqgIIB160C2MIMnRBaqc1hdAUvJ+9ZBWo0uMjRAxlQAQTcIFc2ZmOnYga+oCIGqDnXHrk7diKhxOGc1tR0Z2OMNeRbM1wnK6BebHovIfEDk74T2YWf/dhvnQDuTzhMa4X32G+dBI5OuE/ynvsN86Cp5PeEvyvvsN86Cx5OuFPynvsN86Co5POEz/2vvsN86CXcnfCY1wvvsN86Abyd8JnTC++w3zoA8nnCY1wvvsN86CRydcJ/lPfYb50Ff4e8JflffYb50FjydcJ/lPfYb50EDk84TOmF99hvnQDuTvhMa4X32G+dAN5O+EzphffYb50EHk94T/K++w3zoLfw64U/Ke+w3zoMng3kzx9RwFRrKLdrnPY8x/a2mTJ6yOtB1/i/wAD08HRZRpghjQZJglzjq50bSUGxqnN926ApHL96yCtRpcZGiBjagAgm460ChTMzHTsQMe8EQNUFaYymTZAznm7/igUKJF910FnVM1gghoy3PVZAO8vTZvQS1+WxQQaRNxtQW54aR0IKikW3OxBLn5rBBDfI127kA5ua46roJbUy2OxBU0Sb779qC5rA2jWyCoZluUEuOaw70A05Ndu5BDmZrhBIqgW3IK8ydfWgsamaw2oIa3Lc9SCXeXps39KAa7LY9dkEGmXXG1BYVgLRpZBQUiL7kFnPzWCCGjLc7dyAcM2mzeglr8tigg0ib70FueGkdCCopltzsQS52aw60Ffs53hA+poeooMah94IG4nQdaCMNtQUxGqB9HQIMXb6/3QZVb7pQIw+vqQXxWz1oJw2h60Cq/3j6vggyaeg6ggxaeo6wgyMR93sQLw2pQGJ1CC+H0QIq6lBlHT1IMajqEDsTp60FcLt9SCuJ19X+0DaH3R6/igxn6nrKDLq6HqQY9DVAzE6BAYbQoF4jVA+loOpBit1HX+6DJr/dKBWG19X+kGSg//2Q=="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Code Upload
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="/codeEditor">
         Open 
        </Button>
      </CardActions>
    </Card>
  
    </div>
  );
}

export default CardOptions;
