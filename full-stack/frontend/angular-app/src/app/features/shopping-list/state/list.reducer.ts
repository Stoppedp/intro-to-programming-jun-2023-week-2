/* eslint-disable @typescript-eslint/no-empty-interface */
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on, createFeatureSelector } from '@ngrx/store';
import { ListDocuments } from './list.actions';
import { FEATURE_NAME, ShoppingFeatureState } from '.';

 

export interface ShoppingListEntity {
  id: string;
  description: string;
  purchased: boolean;
}

 

export interface State extends EntityState<ShoppingListEntity> {}

 

export const adapter = createEntityAdapter<ShoppingListEntity>();

 

const initialState = adapter.getInitialState();

 

export const reducer = createReducer(initialState,
    on(ListDocuments.list,(s,a) => adapter.setAll(a.payload, s)));

const selectFeature = createFeatureSelector<ShoppingFeatureState>(FEATURE_NAME);
