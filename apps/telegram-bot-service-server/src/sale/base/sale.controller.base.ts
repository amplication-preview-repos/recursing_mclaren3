/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SaleService } from "../sale.service";
import { SaleCreateInput } from "./SaleCreateInput";
import { Sale } from "./Sale";
import { SaleFindManyArgs } from "./SaleFindManyArgs";
import { SaleWhereUniqueInput } from "./SaleWhereUniqueInput";
import { SaleUpdateInput } from "./SaleUpdateInput";

export class SaleControllerBase {
  constructor(protected readonly service: SaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sale })
  async createSale(@common.Body() data: SaleCreateInput): Promise<Sale> {
    return await this.service.createSale({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        clientTelegramId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Sale] })
  @ApiNestedQuery(SaleFindManyArgs)
  async sales(@common.Req() request: Request): Promise<Sale[]> {
    const args = plainToClass(SaleFindManyArgs, request.query);
    return this.service.sales({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        clientTelegramId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async sale(
    @common.Param() params: SaleWhereUniqueInput
  ): Promise<Sale | null> {
    const result = await this.service.sale({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        clientTelegramId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSale(
    @common.Param() params: SaleWhereUniqueInput,
    @common.Body() data: SaleUpdateInput
  ): Promise<Sale | null> {
    try {
      return await this.service.updateSale({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          clientTelegramId: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Sale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSale(
    @common.Param() params: SaleWhereUniqueInput
  ): Promise<Sale | null> {
    try {
      return await this.service.deleteSale({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          date: true,
          clientTelegramId: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}