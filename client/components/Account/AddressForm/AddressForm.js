import React from 'react';
import { Form, Button } from "semantic-ui-react";

export default function AddressForm() {
    return (
        <Form>
            <Form.Input 
                name="title"
                type="text"
                label="Titulo de la dirección"
                placeholder="Titulo de la dirección"
            />

            <Form.Group widths="equal">
                <Form.Input 
                    name="name"
                    type="text"
                    label="Nombre y apellidos"
                    placeholder="Nombre y apellidos"
                />
                <Form.Input 
                    name="address"
                    type="text"
                    label="Dirección"
                    placeholder="Dirección"
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="city"
                    type="text"
                    label="Localidad"
                    placeholder="Localidad"
                />
                <Form.Input 
                    name="state"
                    type="text"
                    label="Estado/Provincia/Región"
                    placeholder="Estado/Provincia/Región"
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input 
                    name="postalCode"
                    type="text"
                    label="Código postal"
                    placeholder="Código postal"
                />
                <Form.Input 
                    name="phone"
                    type="text"
                    label="Teléfono"
                    placeholder="Teléfono"
                />
            </Form.Group>
            <div className="actions">
                <Button className="submit" type="submit">Crear dirección</Button>
            </div>
        </Form>
    );
}
