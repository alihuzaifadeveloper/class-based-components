// components/BaseComponent.tsx
import React, { Component } from 'react'

// The generic base component class with types for Props and State
export default class BaseComponent<P = {}, S = {}> extends Component<P, S> {
  constructor(props: P) {
    super(props)
  }

  // Common method to handle input changes for any text input
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({ [name]: value } as unknown as S)
  }
}
